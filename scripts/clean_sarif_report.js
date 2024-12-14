const fs = require('fs');
const path = require('path');

function cleanSarifReport(inputFilePath, outputFilePath) {
  try {
    // Read the SARIF file
    const sarifData = JSON.parse(fs.readFileSync(inputFilePath, 'utf-8'));

    // Iterate through SARIF runs and results
    if (sarifData.runs && Array.isArray(sarifData.runs)) {
      sarifData.runs.forEach((run) => {
        if (run.results && Array.isArray(run.results)) {
          run.results.forEach((result) => {
            if (result.locations && Array.isArray(result.locations)) {
              result.locations.forEach((location) => {
                if (location.physicalLocation && location.physicalLocation.artifactLocation) {
                  let uri = location.physicalLocation.artifactLocation.uri;

                  // Remove query components (everything after '?')
                  if (uri && uri.includes('?')) {
                    uri = uri.split('?')[0];
                  }

                  // Remove any illegal characters
                  uri = uri.replace(/[^a-zA-Z0-9\-_.:/]/g, '');

                  // Update the URI
                  location.physicalLocation.artifactLocation.uri = uri;
                }
              });
            }
          });
        }
      });
    }

    // Write the cleaned SARIF report to the output file
    fs.writeFileSync(outputFilePath, JSON.stringify(sarifData, null, 2), 'utf-8');
    console.log(`SARIF report cleaned and saved to ${outputFilePath}`);
  } catch (error) {
    console.error(`Error processing SARIF report: ${error.message}`);
  }
}

// Define the input and output file paths
const inputFilePath = path.resolve(__dirname, '../.owasp-dependency-check/odc-reports/dependency-check-report.sarif');
const outputFilePath = path.resolve(__dirname, '../.owasp-dependency-check/odc-reports/clean-dependency-check-report.sarif');

// Clean the SARIF report
cleanSarifReport(inputFilePath, outputFilePath);