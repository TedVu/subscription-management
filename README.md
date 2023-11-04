# Subscription Management

A subscription management program which will have these following features:

- Support CRUD (Create, Read, Update, Delete) operation of a subscription.
- Filter / Sort subscription.
- Subscription pagination.
- Notify users through many channels. (browser, email, mobile phone)
- Suggest good deals, browse for subscriptions and cost.
- Calculate the total subscription cost and have a visualization dashboard of the cost.
- Drag-and-drop the subscription items.




## Installation

Install the dependency with npm

```bash
  npm install 
```

To run the program, run this code
```bash
  npm run serve
```

Build a bundle file for production
```bash
  npm run build
```

## Tech Stacks

### Frontend

- ViteJS
- Vue3 Composition APIs and script-setup style of structuring .vue files.

### Backend

- Use Firebase as a Backend-as-a-Service

# TO DO

- DEFECT: Fix display subscription card when there is only one subscription [X]
- DEFECT: Saving doesn't hot reload, maybe some problem with file extension detection [X] 
- DEFECT: Card title should be under the image [X]
- DEFECT: Refresh rate when deleting a subscription item is not consistent [ ]
- DEFECT: Render an item without data causes error, we should handle this case gracefully [ ]
- DEFECT: Two images may be overlapped based on the name - as we are using name-date => we should use name-dateiso string instead [X]
- DEFECT: Images not loading [X]
- DEFECT: Images isn't layouted well on mobile [ ]

## Customer facing features

- FEATURE: Improve logout experience [X]
- FEATURE: Recheck authentication logic [X]
- FEATURE: When users enter an unconfigured route we should route to not found page [X]
- FEATURE: Menu bar on the side showing the current page [X]
- FEATURE: Allow updating image when adding a new subscription [X]
- FEATURE: Allow all types of graphical files to be uploaded [X]
- FEATURE: Confirmation before executing delete operation [X]
- FEATURE: Implement update action [X]
- FEATURE: Implement notification service []

## Technical features

- FEATURE: Implement cleanup for storage (currently files are added to firebase storage without deletion) [ ]
- FEATURE: Implement TS Path Alias [ ]
- FEATURE: Code hot reload still doesn't work properly [X]
- FEATURE: Refactor into composables [ ]
- FEATURE: Improve DX with Volar [ ]
- FEATURE: Improve security => is it secure to store firestore key ? [ ]

## Regular code cleanup
- CLEANUP: Cleanup and refactor, consider applying any design pattern if necessary

## License

[MIT](https://choosealicense.com/licenses/mit/)
