const licensesArray = [
  {name: 'Apache 2.0 License',
    badge: '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
    link: '(https://opensource.org/licenses/Apache-2.0)'},
  {name: 'GNU General Public License v3.0',
    badge: '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    link: '(https://www.gnu.org/licenses/gpl-3.0)'},
  {name: 'MIT License',
    badge: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    link: '(https://opensource.org/licenses/MIT)'},
  {name: 'BSD 2-Clause License',
    badge: '![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)',
    link: '(https://opensource.org/licenses/BSD-2-Clause)'},
  {name: 'Boost Software License 1.0',
    badge: '![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)',
    link: '(https://www.boost.org/LICENSE_1_0.txt)'},
  {name: 'Mozilla Public License 2.0',
    badge: '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)',
    link: '(https://opensource.org/licenses/MPL-2.0)'
  }];

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  for(let i=0; i<licensesArray.length; i++){
    if(license === licensesArray[i].name){
      return  licensesArray[i].badge;
    }
  }
  return "";
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  for(let i=0; i<licensesArray.length; i++){
    if(license === licensesArray[i].name){
      return  licensesArray[i].link;
    }
  }
  return "";
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let badge = renderLicenseBadge(license);
  let link = renderLicenseLink(license);

  return `${badge}\n${link}`;
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  let markdown = renderLicenseSection(data.license);
  return markdown;
}

module.exports = generateMarkdown;