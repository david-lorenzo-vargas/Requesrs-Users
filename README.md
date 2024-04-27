# Requesrs Users

1. [Getting Started](#getting-started)
2. [Description](#description)
3. [Demo](#demo)
4. [Stack](#stack)
5. [Types](#types)
6. [Atomic approach](#atomic-approach)
7. [Dynamic routes](#dynamic-routes)
8. [404](#404)
9. [Alias](#alias)
10. [Testing](#testing)
11. [Accessibility](#accessibility)
12. [Responsiveness](#responsiveness)
13. [Further implementation](#further-implementation)

## Getting Started

First, install node modules:

```bash
npm install
```

Add `.env` file to the root of the project and declare `REQUESRS_API_ENDPOINT_USERS` (the endpoint provided in the task), 

Then, run the development server:

```bash
npm run dev
```

Node.js 18.17.0 or later required.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Description


## Demo

## Stack

<ul>
  <li>Next.js</li>
  <li>Typescript</li>
  <li>Tailwind</li>
  <li>Jest</li>
  <li>React Testing Library</li>
</ul>

## Types

All types and enums have been declared in a `Types/types.ts`

## Atomic approach

Atomic approach has been used for structuring and ordering the componets separated in 'atoms', 'molecules' and 'organisms'.

## Dynamic routes

Dynamic routes created for re directing the user to a route based on the userId selected

For example `/users/1`

## 404

If the user enters manually an URL for fetching a user by ID but this uer does not exist, we receive `status 404` from fetchUserOne utility and we redirect the user to 404 route where we render a component with a 404 SVG icon and a message

![Screenshot 2024-04-27 at 14 53 41](https://github.com/david-lorenzo-vargas/Requesrs-Users/assets/72414745/e97a20e4-e177-4f18-a87f-bd4bebebcb53)

## Alias

Alias added for improting utilities, types and icons.

`import Chevron from "@icon/Chevron";`
<br>
<br>

`import { User } from "@customTypes/types";`
<br>
<br>

`import { fetchUserOne } from "@util/fetchUserOne"`

## Testing

Jest and React Testing Library have been used for testing. Testing has been added for some components but, as further implementation, it would be necessary to add more unit and integration testing for other functionalities and components.

For running tests: `npm run test`

## Accessibility

Native HTML tags with WAI-ARIA Roles have been used for accessibility which would allow screen readers to navigate through the page.

An 96 overall score achieved in Lighthouse tool

![Screenshot 2024-04-27 at 15 07 28](https://github.com/david-lorenzo-vargas/Requesrs-Users/assets/72414745/734770cc-d653-47b6-b503-ceff74a8a467)


## Responsiveness

The app is responsive and adjusts to desktop, tablet and mobile viewports, media queries have been added via Tailwind for adjusting the design to the screen size.

### Mobile

![Screenshot 2024-04-26 at 21 34 43](https://github.com/david-lorenzo-vargas/Requesrs-Users/assets/72414745/87cd776d-5aac-41f1-9e7b-18e387b9580b)

### Tablet

![Screenshot 2024-04-26 at 21 36 12](https://github.com/david-lorenzo-vargas/Requesrs-Users/assets/72414745/81afd7f4-337a-4adb-8998-9329f9731b69)

![Screenshot 2024-04-26 at 21 36 00](https://github.com/david-lorenzo-vargas/Requesrs-Users/assets/72414745/10de6763-5c6c-4d23-b80c-e4786412f589)

### Desktop

![Screenshot 2024-04-26 at 21 36 29](https://github.com/david-lorenzo-vargas/Requesrs-Users/assets/72414745/7076d860-2033-4247-ad5d-c1a27a791c8a)

## Further implementation

1. Add edit user, create new user, delete user functionality using the endpoints given in the task.
2. Add elastic search for filtering users by name, surname, email...
