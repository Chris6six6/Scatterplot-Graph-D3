# Scatter Plot Visualization Project

This project is a scatter plot visualization displaying cyclist data. It fulfills the requirements set forth by FreeCodeCamp's Data Visualization curriculum.

## Project Description

The scatter plot displays cyclist data over time, with dots representing individual data points. It includes features such as title, axes, tick labels, legend, and tooltip for interactive exploration of the data.

## User Stories

1. I can see a title element that has a corresponding id="title".
2. I can see an x-axis that has a corresponding id="x-axis".
3. I can see a y-axis that has a corresponding id="y-axis".
4. I can see dots, that each have a class of dot, which represent the data being plotted.
5. Each dot should have the properties data-xvalue and data-yvalue containing their corresponding x and y values.
6. The data-xvalue and data-yvalue of each dot should be within the range of the actual data and in the correct data format.
7. The data-xvalue and its corresponding dot should align with the corresponding point/value on the x-axis.
8. The data-yvalue and its corresponding dot should align with the corresponding point/value on the y-axis.
9. I can see multiple tick labels on the y-axis with %M:%S time format.
10. I can see multiple tick labels on the x-axis that show the year.
11. I can see that the range of the x-axis labels are within the range of the actual x-axis data.
12. I can see that the range of the y-axis labels are within the range of the actual y-axis data.
13. I can see a legend containing descriptive text that has id="legend".
14. I can mouse over an area and see a tooltip with a corresponding id="tooltip" which displays more information about the area.
15. My tooltip should have a data-year property that corresponds to the data-xvalue of the active area.

## Technologies Used

- HTML
- CSS
- JavaScript
- D3.js (Data-Driven Documents)

## Dataset

The dataset required for this project can be found [here](https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json).

## Project Structure

The project includes HTML, CSS, and JavaScript files. The HTML file contains the structure of the webpage, including DOM elements for the visualization. The CSS file styles the webpage elements for better presentation. The JavaScript file contains the logic to fetch the dataset, process the data, and create the scatter plot visualization using D3.js.

## Usage

To view the scatter plot visualization, simply open the HTML file in a web browser.

## Acknowledgments

- [FreeCodeCamp](https://www.freecodecamp.org/) for providing the project requirements and dataset.
- D3.js community for the powerful data visualization library.
- Developers contributing to open datasets for educational purposes.
