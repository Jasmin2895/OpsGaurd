# OpsGaurd - Smart Access AI 🚀

A multi-tenant, AI-enabled document access system powered by **Permit.io** for fine-grained authorization and approval workflows.


## 🔧 Local Setup

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/smart-access-ai.git
cd smart-access-ai
```

### 2. Install Dependencies

```bash
cd client
npm install

cd ../server
npm install

```

### 3. Create a `.env` File

Create a `.env` file in the server folder with the following variables:

```env
PDP_URL=pdp_url
PERMIT_SDK_SECRET=permit_sdk_secret
OPENAI_API_KEY=open_api_key
OPENAI_ORG_ID=open_ai_org_id
MONGODB_USERNAME=mongo_username
MONGODB_PASSWORD=mongo_password
MONGO_URI=your_mongodb_connection_string
```

Create a `.env` file in the client folder with the following variables:

```env
REACT_APP_SERVER_URL=server_backend_url
REACT_APP_REQUEST_RESOURCE_ACCESS_URL=resource_request_url
REACT_APP_USER_MANAGEMENT_URL=user_management_url
```

> ✅ Tip: Use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for MONGO_URI and [Permit.io](https://www.permit.io/) to get your API key and project ID.

### 4. Run the App

```bash
#inside the server folder
npm start
```

```bash
#inside the client folder
npm run start
```

Visit: [http://localhost:3000](http://localhost:3000)


## 🚀 Testing on Production (Heroku or any Cloud)

### 1. Deploy to Heroku

```bash
heroku create smart-access-ai
heroku config:set MONGO_URI=your_mongo_uri
heroku config:set PERMIT_API_KEY=your_permit_key
heroku config:set PERMIT_PROJECT_ID=your_project_id
git push heroku main
```

Visit your deployed app:  
`https://smart-access-ai.herokuapp.com`

### 2. Test Flow

1. **Login as user** (e.g., `userId=admin&tenantId=default`)
2. **Try to access a document**
3. If denied, request access via the embedded **Permit.io iframe**
4. Admin can approve via dashboard or approval API
5. Retry access – it should be granted now

---

## 🧪 Features to Test

- ✅ Multi-tenant login (Product & Engineering roles)
- ✅ Document-level permission checks
- ✅ Approval workflow for denied access
- ✅ Integration with Permit.io (ABAC + ReBAC)

---

## 📁 Project Structure

```
.
├── client/              # React or frontend app
├── server/              # Node.js backend
│   ├── package.json     # Must be here
│   └── index.js or server.js
└── README.md
```

## LICENSE
MIT (c) 2020 Jasmin Virdi

## 🤝 Contributing

Feel free to fork, improve, and submit a PR!  
Let’s make document access smart, secure, and seamless ✨
