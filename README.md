# CodeSync 🔄🚀

> **Effortlessly sync your code across environments and eliminate version control headaches — real-time synchronization, automated rollback, and team collaboration in one unified platform.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://reactjs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-7-47A248?logo=mongodb)](https://mongodb.com)

---

## 🔥 The Problem

Keeping code in sync across multiple environments — development, staging, production — is a nightmare for every DevOps team. **Common pain points:**

- 🔀 **Merge conflicts** — Hours wasted resolving conflicts between environments
- 🐛 **Environment drift** — "It works on my machine" syndrome at scale
- ⏪ **Rollback chaos** — Reverting a bad deploy is slow and risky
- 👥 **Collaboration friction** — No visibility into who deployed what and when

---

## 💡 The Solution

**CodeSync** provides real-time bidirectional synchronization between your environments, with instant rollback capabilities and full deployment traceability. Think of it as Git for your deployed environments.

> "Real-time environment sync with one-click rollback and full audit trail."

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔄 **Real-time Sync** | Bi-directional sync between dev, staging, and production environments |
| ⏪ **Instant Rollback** | Revert any deployment in one click with version history |
| 👁️ **Live Dashboard** | See what's deployed where, with diff views |
| 🧑‍🤝‍🧑 **Collaboration** | Code reviews, comments, and approval workflows |
| 🔐 **Access Control** | Role-based permissions per environment |
| 📋 **Audit Trail** | Every deployment logged with full diff and author |

---

## 🏗️ Architecture

```
┌──────────────────────────────────────────────┐
│              CodeSync Application              │
│  ┌──────────────┐    ┌────────────────────┐   │
│  │ FingguSync   │    │ FingguVersionCont  │   │
│  │ (Sync Engine)│    │ (Version Manager)  │   │
│  └──────┬───────┘    └────────┬───────────┘   │
│         │                     │                 │
│         └──────────┬──────────┘                 │
│                    ▼                            │
│  ┌────────────────────────────────────────┐     │
│  │         FingguCollaboration            │     │
│  │    (Reviews, Comments, Workflows)      │     │
│  └────────────────────────────────────────┘     │
│                    │                            │
│                    ▼                            │
│  ┌────────────────────────────────────────┐     │
│  │          FingguApiService              │     │
│  └────────────────────────────────────────┘     │
└──────────────────────┬─────────────────────────┘
                       │
                       ▼
┌────────────────────────────────────────────────┐
│               Backend Services                  │
│  ┌──────────┐  ┌────────────┐  ┌────────────┐  │
│  │ Express  │  │ Sync Worker│  │ WebSocket  │  │
│  │ Server   │  │ (Bull/RQ)  │  │ (realtime) │  │
│  └──────────┘  └────────────┘  └────────────┘  │
│                       │                          │
│                       ▼                          │
│  ┌────────────────────────────────────────┐     │
│  │           MongoDB (state + logs)       │     │
│  └────────────────────────────────────────┘     │
└────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, react-split-pane, react-diff-viewer |
| **Backend** | Node.js 18+, Express.js, Socket.io |
| **Database** | MongoDB (primary), Redis (pub/sub) |
| **Queue** | Bull / Redis for background sync jobs |
| **Auth** | JWT + environment-scoped API tokens |
| **Real-time** | WebSocket (Socket.io) for live env updates |

---

## 🚀 Quick Start

```bash
git clone https://github.com/sudarshanpjadhav/finggu-codesync.git
cd finggu-codesync
npm install
cp .env.example .env
# Configure MONGODB_URI, REDIS_URL, and environment endpoints
npm run dev
```

---

## ⚙️ Configuration

| Variable | Default | Description |
|---|---|---|
| `PORT` | `8787` | Server port |
| `MONGODB_URI` | — | MongoDB connection string |
| `REDIS_URL` | — | Redis URL for pub/sub and queue |
| `SYNC_INTERVAL_MS` | `5000` | Sync check interval |
| `ROLLBACK_LIMIT` | `50` | Max versions kept per env |

---

## 📁 Project Structure

```
src/
├── index.js                        # App entry point
├── FingguApp.js                    # Root React component
├── components/
│   ├── FingguSync.js               # Sync trigger & status UI
│   ├── FingguVersionControl.js     # Version history & rollback
│   └── FingguCollaboration.js      # Reviews & comments
├── utils/
│   ├── finggu_sync_utils.js        # Sync logic
│   └── finggu_version_utils.js     # Version management
├── hooks/
│   ├── useFingguSync.js            # Sync state hook
│   └── useFingguVersion.js         # Version state hook
├── services/
│   └── FingguApiService.js         # API client
├── constants/
│   └── FINGGU_ACTION_TYPES.js      # Action constants
└── styles/
    └── finggu-styles.css           # Styles
```

---

## 🗺️ Roadmap

- [ ] **Multi-cloud Sync** — Sync across AWS, GCP, and Azure simultaneously
- [ ] **GitOps Integration** — Auto-sync from Git tags/branches to environments
- [ ] **Visual Diff** — Side-by-side file comparison across environments
- [ ] **Scheduled Syncs** — Cron-based sync schedules for off-peak hours
- [ ] **Slack/Teams Bot** — Deploy approvals and notifications from chat

---

## 🤝 Contributing

1. Fork → `git checkout -b feature/cool-stuff`
2. Commit → `git commit -m "Add cool stuff"`
3. Push → `git push origin feature/cool-stuff`
4. PR → Open it!

---

## 📄 License

MIT — see [LICENSE](LICENSE)

---

<p align="center">
  Built with ❤️ by the Finggu Autonomous Software Factory
</p>
