# Subscription Management

A subscription management program which has these following features:

- Support CRUD (Create, Read, Update, Delete) operation of a subscription.
- Filter / Sort subscription
- Subscription pagination
- Notify users through many channels. (browser, email, mobile phone)
- Suggest good deals, browse for subscription and cost.
- Calculate the total subscription cost and have a dashboard visualization of the cost.




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

## 🛠 Tech Stacks

### Frontend

- ViteJS
- Vue3 Composition APIs and script-setup style of structuring .vue files.

### Backend
- Use Firebase as a Backend-as-a-Service

# TO DO


- DEFECT: Fix display subscription card when there is only one subscription [X]
- DEFECT: Refresh rate when deleting a subscription item is not consistent
- DEFECT: Render an item without data causes error, we should handle this case gracefully
- DEFECT: Saving doesn't hot reload, maybe some problem with file extension detection


## Customer facing features
- FEATURE: Improve logout experience [X]
- FEATURE: Recheck authentication logic [X]
- FEATURE: When users enter an unconfigured route we should route to not found page [X]
- FEATURE: Menu bar on the side showing the current page [X]
- FEATURE: Implement update action including adding a details page
- FEATURE: Allow updating image when adding a new subscription
## Technical features
- FEATURE: Improve DX with Volar
- FEATURE: Dockerize the application

## License

[MIT](https://choosealicense.com/licenses/mit/)
