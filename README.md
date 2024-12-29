# Helios Project

This project is a client-side application designed to show users data and graphs related to commodity prices throughout the year. Users can select the data period to be displayed, choose the type of data to show, and download the data.

## Links

[Helios Project](https://helios-project-rf.vercel.app/)  
[Helios Original Design](https://www.figma.com/design/9b0hT6q2ViTmxnS6E4ABNG/Technical-Test---Front-end?node-id=0-1&p=f&t=x0vuL7SGDSQusUdT-0)

## How to run in Local Environment

1. Clone the repository  
   `git clone https://github.com/RRFayad/helios-task.git`

2. Navigate to the project directory  
   `cd helios-task`

3. Install dependencies (using `--force` may help resolve dependency issues with the latest versions of Next.js and React):  
   `npm i --force`

4. Start the Development Server  
   `npm run dev`

## Features

### Chart

The Chart displays:

- Closing Price of the commodity (brown line);
- Price oscilations during the day - daily high and low (beige area);
- Climate Risk (blue line);
- Forecasted Climate Risk (dashed line).

#### Chart Tooltip

- Users can hover with the mouse (or click and hold if using a tablet) to display a tooltip with the details for a specific day;

#### Chart Options

Users can choose whether to display climate risk and/or price ranges on the chart.

#### Time Selection

User can:

1. Select month ranges using the slider:

   - This selects the 1st day of the initial month to the last day of the final month;

2. Select specific dates using the calendar buttons in the upper-right area;

##### UX Aspects in Time Selection:

- When users adjust the slider, there is a small delay to ensure they finish selecting the desired range (this delay does not occur when selecting dates from the calendar).
- Both the slider and calendar update each other based on the selected dates.

### Header Buttons Options

#### Info Button

Displays a tooltip with additional information.

#### Export Button

Users can extract a CSV file containing the data in the selected date range;  
**Note:** The file does not include price range data — see _project premises_ for more details.

#### Expand View Button

Users can expand the chart view for the selected date range.

Users can close the expanded view by:

- Pressing the close button ("x");
- Clicking on the Backdrop;
- Pressing the 'Esc' key.

### Responsiveness

As specified, this project was developed considering screens 768px wide or larger (tablets, laptops, and large desktops)..

## Project and Technologies

### Technologies

The main technogies used in this project are:

- TypeScript
- Next.js
- ShadcnUI (UI Library)
- Recharts
- Tailwind CSS

### Project Structure

#### App Folder

- The project render only one page [src/app/page](src/app/page.tsx);
- This folder also contains Helios Favicon and a global.css file, which defines the project colors pallete to maintain style consistency.

#### Components

All the components are organized in the components folder.  
The components are mostly client components, using hooks, such as useState, useContext, useEffect, useReducer among others.

##### UI Library Components

The _ui_ folder contains pre-made components from [Shadcn](https://ui.shadcn.com/docs) (e.g., calendar, popover). These components I may have been customized to fit project's requirements.

#### Context

A context file was created to manage the state among components, such as the dates and chart options.

#### Actions

Actions that simulate data fetching, returning promises to the client. The actions are for:

1.  Getting data for the chart;
2.  Getting data for the csv file.

#### Lib Folder

This folder contains the provided data and a utils file used for utility functions throughout the project.

#### Types Folder

Type definition files.

## Project Premises

1. The project reflects my best interpretation of the product rules based on the provided design and instructions;

2. For demonstration purposes, the project assumes it's being viewed on Dec 14th, as it's the last date in the provided data;

   - It can be adjusted in the commented `today` constant of the [get-data-by-period file](/src/actions/get-data-by-period.ts);

3. Since _Daily High_ and _Daily Low_ data were not provided, these values are generated dynamically in the server action for each request (randomly between +/-20% of the closing price for a given day);

4. Date Selectors:

- Initially, I implemented a month selector based on my interpretation of the product requirements;
- However, to avoid redundancy with the month slider, I replaced it with a date picker calendar;
- ** To switch back to the original month selector:**
  - Open [TimeSelector file](/src/components/TimeSelector/TimeSelector.tsx);
  - Comment out the `DatePickerByDay` Component(line 59 in my case): `<DatePickerByDay dispatch={dispatch} />`;
  - Uncomment the `MonthSelector component` (lines 60 to 63 in my case):
    ```typescript
        <MonthSelector
        monthsRangeState={monthsRangeToBeShown}
        dispatch={dispatch}
        />
    ```
