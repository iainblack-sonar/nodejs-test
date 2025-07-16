// Noncompliant: Event handling and callback issues
class EventManager {
    constructor() {
        this.handlers = new Set();
        this.isProcessing = false;
    }

    // Noncompliant: Callback hell with error propagation issues
    processEvent(event) {
        this.isProcessing = true;
        
        // Bug: Nested callbacks with no error handling
        this.validateEvent(event, (err, validEvent) => {
            if (err) {
                // Bug: Error swallowed
                console.log(err);
                return;
            }
            
            this.transformEvent(validEvent, (err, transformedEvent) => {
                if (err) {
                    // Bug: Inconsistent error handling
                    throw err;  // Uncaught exception in callback
                }
                
                this.saveEvent(transformedEvent, (err, result) => {
                    // Bug: State not reset if error occurs
                    this.isProcessing = false;
                    if (err) return;
                    
                    // Bug: Callback parameters ignored
                    this.notifyHandlers(transformedEvent);
                });
            });
        });
    }

    // Noncompliant: Event handler memory leak
    addHandler(handler) {
        // Bug: No maximum limit on handlers
        this.handlers.add(handler);
        // Never removes old handlers
    }

    // Noncompliant: Async error swallowing
    async notifyHandlers(event) {
        for (const handler of this.handlers) {
            try {
                // Bug: No await, promises are not properly handled
                handler(event);
            } catch (error) {
                // Bug: Errors are swallowed
                console.error('Handler failed:', error);
            }
        }
    }

    // Noncompliant: Recursive promise chain
    async processQueue(queue) {
        if (queue.length === 0) return;
        
        // Bug: Potential stack overflow
        const item = queue.shift();
        await this.processEvent(item);
        // Bug: Recursive promise without tail call optimization
        return this.processQueue(queue);
    }
}

module.exports = EventManager;
