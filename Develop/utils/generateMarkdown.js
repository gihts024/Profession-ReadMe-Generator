// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (data.license ==true) {
    if (data.license === 'Free version') {
    return data.license;
  } if (data.license === '6 Months Try') {
    return data.license;
  } if (data.license === 'Complete Version') {
     return data.license;
  }
   else {
    return;
   }
   
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (data.license == true) {
    return githubUrl.license;
  }
    else {
      return;
    }
    
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (data.license == true) {
    return data.question
  }
  else return;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
### Description ###
${data.description}

### Table of Contents
${data.description}

### Installation ###

${data.installation}

## usage ##

${data.usage}

## License ##

${data.license}

## Test Instructions
 
${data.tests}

## Github ##
${data.username}
${data.email}

`;


}

module.exports = generateMarkdown;
