# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

## Ticket 1 - Create a CustomAgentIds Table

Here, a new table CustomAgentIds should be created which will have the columns (amongst others like id) facilityId (Id of the facility creating the custom Id), agentId (he internal database id of the agent) and the customAgentId (the custk id provided by the facility). Relationships should be setup between thee CustomAgentIds and the Facilities table. Database migration should be done to add this new table.

Time/Effort Estimates:

- Less than 4 hours.

Acceptance Criteria:

- The table CustomAgentIds is created and has a One to Many relationship with the Facilities table.
- Database migration should be done to add this new table.

## Ticket 2 - Create a `getShiftsByCustomAgentId` function

Here, a function `getShiftsByCustomAgentId` should be created which accepts the Custoom Agent Id and Facility Id, then uses it to get the internal database id of the agent, which in turns is used to spool (together with the facility Id) to spool all the Agents Shifts for the Facility from the Shifts table. The spooled list should be passed to the `generateReport`function.

Time/Effort Estimates:

- 1 to 2 days.

Acceptance Criteria:

- Facility should beable to spool an Agent's shifts by using their custom id.
