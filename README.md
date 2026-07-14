# Logistics Lead Management Dashboard

## Project Overview

The Logistics Lead Management Dashboard is a React-based frontend application developed for managing logistics enquiries. It provides an intuitive interface for tracking leads, filtering enquiries, viewing lead details, monitoring follow-ups, and preparing the application for backend integration.

---

## Features

- Dashboard overview
- Lead summary cards
- Search by lead or company
- Status filtering
- Follow-up filtering
- Overdue and Due Today indicators
- Lead detail drawer
- Recommended next actions
- Loading state
- Empty state
- Error state with Retry
- Responsive layout
- GitHub repository
- Vercel deployment

---

## Technology Stack

- React
- Vite
- Tailwind CSS
- React Icons
- JavaScript (ES6)

---

## Project Structure

```
src/
│
├── components/
│   ├── Sidebar.jsx
│   ├── Header.jsx
│   ├── StatsCards.jsx
│   ├── Filters.jsx
│   ├── LeadTable.jsx
│   ├── LeadDrawer.jsx
│   ├── LoadingState.jsx
│   ├── EmptyState.jsx
│   ├── ErrorState.jsx
│
├── data/
│   └── leads.jsx
│
├── pages/
│   └── Dashboard.jsx
│
├── App.jsx
└── main.jsx
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Gadhakrishna/logistics-dashboard.git
```

Move into the project folder:

```bash
cd logistics-dashboard
```

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

---

## Deployment

The project is deployed on Vercel.

Deployment Link:

https://logistics-dashboard-red-seven.vercel.app/

GitHub Repository:

https://github.com/Gadhakrishna/logistics-dashboard

---

## Testing

The following functionality has been verified:

- Dashboard layout
- Summary cards
- Search
- Status filter
- Follow-up filter
- Due Today logic
- Overdue logic
- Lead drawer
- Loading state
- Empty state
- Error state
- Responsive behaviour
- Console verification

---

## Known Limitations

- Currently uses mock lead data.
- Backend API integration is pending.
- Status updates depend on backend availability.
- Authentication is not implemented.

---

## Handover Notes

- Components are modular.
- API integration can replace the mock data source.
- Status updates can be connected once backend endpoints are available.
- Responsive behaviour has been verified.
- Project is ready for backend integration.

---

## Recommended Future Improvements

- Dashboard analytics
- Email notifications
- Export to Excel/PDF
- Activity history
- Role-based authentication
- Real-time lead updates
- Dark mode support

---

## Author

<<<<<<< HEAD
**Gadha Krishna C H**
=======
**Gadha Krishna C H**
>>>>>>> 21983c0 (Updated README documentation)
