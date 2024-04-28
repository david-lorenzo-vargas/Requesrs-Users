# Requesrs Users

1. [Getting Started](#getting-started)
2. [Description](#description)
3. [Demo](#demo)
4. [Stack](#stack)
5. [Types](#types)
6. [Atomic approach](#atomic-approach)
7. [Memoization](#memoization)
8. [Next Config](#next-config)
9. [Dynamic routes](#dynamic-routes)
10. [404](#404)
11. [Alias](#alias)
12. [Testing](#testing)
13. [Accessibility](#accessibility)
14. [Responsiveness](#responsiveness)
15. [Further implementation](#further-implementation)

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

App that displays users fetched from external API. Scroll down to reach the end of user list and use pagination for moving forward the pages and fetch new users.

The URL gets updated based on params passed and the users get fetched based on those params. Once you reach the end of the available pages, you cannot click to move forward and you can only go back to previous pages.

Click on an specific page number to jump to that page, or change the URL manually. If the page number entered manually does not have users, a warning message gets rendered in the page saying "There are not users".

The number of pages available in pagination are based on number of pages available coming from API.

Select a user to be redirected to a dynamic route based on user ID and see that specific user's details.

Click on page header logo and go back to page 1 of users list.

If the user changes manually the URL and the user does not exist, we redirect the user to a custom 404 page to notify that the user does not exist.

## Demo

![Apr-27-2024 17-07-59](https://github.com/david-lorenzo-vargas/Requesrs-Users/assets/72414745/7a134970-af87-425e-be98-dd176d7109e9)

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

Atomic approach has been used for structuring and ordering the componets devided by `Atoms`, `Molecules` and `Organisms`.

## Memoization

Memoization has been implemented for better performance, faster rendering and avoid unnecesary re-renderings by using `useMemo` and `useCallback` React Hooks.


## Next Config

Next.config.js file modified to set `/users?page=1` as home page so when users land on `localhost:3000` or `localhost:3000/` they get automaticaly redirected.

```bash
  module.exports = {
    async redirects () {
      return [
        {
          source: '/',
          destination: '/users?page=1',
          permanent: true,
          basePath: false,
        }
      ]
    },
  }
```

## Dynamic routes

Dynamic routes created for redirecting the user to a route based on the userId selected.

All routes organised inside (routes) dir so it doesn't affect the URL.

For example `/users/1`.

Structure:

```bash
  src/
    | app/
    | (routes)/
      | 404
      | users/
        | [id]
```       

## 404

If the user enters manually an URL for fetching a user by ID but this user does not exist, we receive `status 404` from fetchUserOne utility and we redirect the user to 404 route where we render a component with a 404 SVG icon and a message

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

To run tests: `npm run test`

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

1. Add edit user, create new user, delete user functionality.
2. Add elastic search for filtering users by name, surname, email...
3. Add go to last page, go to first page in pagination
