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

## Responsiveness

The app is responsive and adjusts to desktop, tablet and mobile viewports, media queries have been added via Tailwind for adjusting the design to the screen size.

### Mobile

### Tablet

### Desktop

## Further implementation

1. Add edit user, create new user, delete user functionality using the endpoints given in the task.
2. Add elastic search for filtering users by name, surname, email...
