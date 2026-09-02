# Product Requirements Document (PRD)

## 1. Project Overview

### Project Title

**Smart Procurement Queue & Slot Management System for Farmers**

### SIH Problem Statement

* **Problem Statement ID:** 26032
* **Organization:** Ministry of Consumer Affairs, Food & Public Distribution
* **Department:** Department of Consumer Affairs (DoCA)
* **Category:** Software
* **Theme:** Smart Automation

### Project Type

A responsive **web-based platform** connecting farmers, procurement-centre staff, and administrators.

### Frontend Requirement

Build a **modern, responsive, user-friendly frontend** for the complete platform, optimized for mobile phones, tablets, and desktops, with **Dark Mode, Light Mode, and complete multilingual support across the entire website**.

---

# 2. Problem Statement

Farmers often face:

* Long waiting times at procurement centres.
* Overcrowding and congestion.
* Lack of information about procurement schedules.
* Difficulty knowing when their turn will come.
* Uncertainty about procurement status.
* Uncertainty about payment status.
* Unnecessary trips to procurement centres.

The current process can make it difficult for farmers to know **when to visit, where to go, and what stage their procurement has reached**.

---

# 3. Proposed Solution

The proposed system is a **Smart Procurement Management Platform** that digitizes the procurement-centre process.

Farmers can:

**Register → Select Centre → Book Slot → Receive Digital Token → Track Queue → Receive Notifications → Track Procurement → Track Payment**

Procurement-centre staff can:

**View Bookings → Manage Queue → Process Farmer → Update Procurement → Update Payment**

Administrators can:

**Monitor Centres → Monitor Procurement → Monitor Payments → View Reports & Analytics**

---

# 4. Main Objectives

1. Reduce farmer waiting time.
2. Reduce overcrowding at procurement centres.
3. Allow farmers to book slots in advance.
4. Provide real-time queue information.
5. Notify farmers about important updates.
6. Provide transparent procurement tracking.
7. Provide transparent payment tracking.
8. Help procurement-centre staff manage queues efficiently.
9. Allow administrators to monitor procurement activities.
10. Make the system accessible through multiple Indian languages.

---

# 5. Target Users & Roles

## 5.1 Farmer

The farmer can:

* Register/login.
* Create and manage a profile.
* Select a procurement centre.
* View available slots.
* Book/reschedule/cancel a slot.
* Receive a digital token.
* Track the live queue.
* Receive notifications.
* Track procurement.
* Track payment.
* View previous procurement history.
* Change language.
* Change website appearance between Dark and Light Mode.

---

## 5.2 Procurement Centre Staff

Staff can:

* Login securely.
* View today's bookings.
* Manage available slots.
* Manage the live queue.
* Call the next farmer.
* Mark farmer arrival.
* Enter crop and quantity details.
* Update quality-check status.
* Update procurement status.
* Update payment status.
* View daily statistics.

---

## 5.3 Administrator

The administrator can:

* Manage procurement centres.
* Monitor multiple centres.
* View registered farmers.
* Monitor live queues.
* Monitor procurement.
* Monitor payments.
* View reports.
* View centre-wise statistics.
* Manage system settings.

---

# 6. Website Structure

The platform should have three main interfaces:

### A. Farmer Portal

**Dashboard → Centre & Slot Booking → My Queue → Procurement → Payments → History → Notifications → Profile → Settings**

### B. Procurement Centre Portal

**Dashboard → Bookings → Live Queue → Farmer Processing → Procurement → Payments → Reports**

### C. Admin Portal

**Dashboard → Centres → Farmers → Procurement → Payments → Analytics → Reports → Settings**

---

# 7. Farmer Portal

## 7.1 Splash / Welcome Page

The first screen should contain:

* Project logo/name.
* Short tagline.
* Login button.
* Register button.
* Language selector.
* Dark/Light Mode option.

Example tagline:

**“Less Waiting. Smarter Procurement.”**

---

# 8. Registration & Login

## Registration

Farmers can register using:

* Full name
* Mobile number
* Farmer ID
* Village/location
* Password
* Confirm password

Optional:

* Crop/produce information
* Preferred procurement centre

For the SIH prototype, use **dummy/sample farmer information** rather than storing real sensitive identification data.

## Login

Options:

* Mobile number + password
* OTP-based verification as an optional feature

---

# 9. Farmer Dashboard

The dashboard should provide an immediate overview.

### Dashboard Cards

* **Upcoming Slot**
* **Queue Number**
* **Current Queue**
* **Procurement Status**
* **Payment Status**

### Example

**Upcoming Appointment**

Centre: —
Date: —
Time: —
Queue No.: —

**Current Status:** —

---

# 10. Procurement Centre Selection

Farmers can:

* Search procurement centres.
* View nearby centres.
* View centre address.
* View working hours.
* View available slots.
* View current queue.
* View crowd level.

### Crowd Indicator

🟢 **Low Crowd**
🟡 **Moderate Crowd**
🔴 **High Crowd**

This allows farmers to choose a more convenient centre or slot.

---

# 11. Slot Booking

The booking flow should be:

**Select Centre → Select Date → Select Time Slot → Confirm Booking**

The system displays:

* Available slots.
* Fully booked slots.
* Slot capacity.
* Number of booked farmers.
* Remaining capacity.

### After Booking

Generate:

* Booking ID.
* Digital token.
* Queue number.
* Centre.
* Date.
* Time slot.

Example:

**Booking ID:** —
**Digital Token:** —
**Slot:** —

The system must prevent **duplicate bookings and overbooking**.

---

# 12. Live Queue Management

This is one of the **core features** of the platform.

The farmer can see:

* Their queue number.
* Currently serving number.
* Number of farmers ahead.
* Estimated waiting time.
* Queue status.

### Example

**YOUR QUEUE**

Your Number: **A-27**
Now Serving: **A-21**
Farmers Ahead: **6**
Estimated Wait: **35 minutes**

### Queue Status

**Booked → Waiting → Called → Arrived → Processing → Completed**

The queue should update in real time when centre staff process farmers.

---

# 13. Digital Token / QR Code

After successful slot booking, the system can generate a digital token.

The token can contain:

* Farmer name/ID
* Booking ID
* Queue number
* Centre
* Date
* Time

A QR code can optionally be used by staff to quickly identify the booking.

---

# 14. Notification System

The platform should provide notifications for:

* Registration confirmation.
* Slot booking confirmation.
* Appointment reminder.
* Queue approaching.
* Farmer's turn.
* Slot change.
* Procurement update.
* Procurement completion.
* Payment processing.
* Payment completion.

### Notification Channels

**MVP:**

* In-app notifications.

**Future:**

* SMS.
* WhatsApp.

---

# 15. Procurement Tracking

Farmers should be able to track the complete process.

### Procurement Progress

**Booked**
↓
**Farmer Arrived**
↓
**Weighing**
↓
**Quality Check**
↓
**Accepted / Rejected**
↓
**Procurement Completed**
↓
**Payment Processing**
↓
**Payment Completed**

A progress bar should visually show the farmer's current stage.

---

# 16. Crop / Produce Details

The system should allow staff to record:

* Crop/produce type.
* Quantity submitted.
* Quantity accepted.
* Procurement date.
* Quality status.
* Procurement centre.

Example:

**Crop:** Wheat
**Submitted:** 500 kg
**Accepted:** 480 kg
**Status:** Procurement Completed

---

# 17. Payment Tracking

Farmers should be able to see:

* Expected payment.
* Payment amount.
* Payment status.
* Payment date.
* Transaction/reference ID.

### Payment Status

**Pending → Processing → Completed**

Example:

**Payment Amount:** ₹24,500
**Status:** Processing

After completion:

**₹24,500 — Payment Completed**

---

# 18. Procurement History

Farmers can view previous procurement records.

Information:

* Date.
* Crop.
* Quantity.
* Procurement centre.
* Procurement status.
* Payment status.
* Amount received.

This provides a transparent digital history.

---

# 19. Language Settings

The platform should support **multiple Indian languages**.

### Suggested Languages

* English
* Hindi
* Marathi
* Gujarati
* Bengali
* Tamil
* Telugu
* Kannada
* Malayalam
* Punjabi
* Odia
* Assamese

### Important Requirement

**Language selection must apply to the entire website, not just the current page.**

When the farmer changes the language from Settings:

**Settings → Language → Marathi**

the complete interface should automatically change to Marathi, including:

* Navigation menu.
* Dashboard.
* Buttons.
* Forms.
* Slot booking.
* Queue information.
* Notifications.
* Procurement status.
* Payment status.
* Error messages.
* Help/instructions.
* Profile.
* Settings.

The selected language should be **saved as the user's preference** and remain active when they navigate to another page or log in again.

The language system should be implemented centrally so that new pages and features can use the same translation system.

---

# 20. Dark Mode & Light Mode

The website should provide two appearance modes.

### ☀️ Light Mode

A clean, bright interface suitable for daytime use.

### 🌙 Dark Mode

A darker interface suitable for low-light conditions and comfortable viewing.

### Theme Switch

The user can change:

**Settings → Appearance → Light / Dark**

The selected theme should apply to the **entire website**, including:

* Dashboard.
* Booking pages.
* Queue page.
* Notifications.
* Procurement pages.
* Payment pages.
* Profile.
* Admin dashboard.
* Staff dashboard.

The user's theme preference should be saved and automatically applied when they return to the website.

---

# 21. Global Settings

The Settings section should contain:

### Appearance

* Light Mode
* Dark Mode

### Language

* Select preferred language.

### Notifications

* Enable/disable notifications.
* Appointment reminders.

### Account

* Edit profile.
* Change password.
* Logout.

All settings should work consistently throughout the platform.

---

# 22. Procurement Centre Dashboard

The centre dashboard should show:

### Today's Overview

* Total bookings.
* Farmers arrived.
* Farmers waiting.
* Farmers being processed.
* Completed procurements.
* Pending payments.

### Live Queue

Staff can:

* View queue.
* Call next farmer.
* Mark farmer as arrived.
* Start processing.
* Complete processing.
* Skip/reschedule a farmer where appropriate.

---

# 23. Slot Management for Staff

Staff can:

* Create time slots.
* Set maximum capacity.
* Open/close slots.
* Change available slots.
* View booked slots.
* Monitor slot occupancy.

Example:

**10:00–10:30 AM**

Capacity: 20
Booked: 17
Remaining: 3

---

# 24. Procurement Processing Dashboard

When a farmer arrives, staff can open their booking.

The screen should show:

**Farmer Details → Produce Details → Weighing → Quality Check → Procurement Status**

Staff can update each stage.

---

# 25. Payment Management

Staff/admin can:

* View pending payments.
* Enter payment amount.
* Update payment status.
* Add transaction/reference ID.
* Mark payment as completed.

---

# 26. Admin Dashboard

The admin dashboard provides a centralized view of the entire system.

### Main Statistics

* Total farmers.
* Total centres.
* Today's bookings.
* Active queues.
* Completed procurements.
* Pending procurements.
* Pending payments.
* Completed payments.

### Centre Monitoring

Admin can select a centre and view:

* Current queue.
* Number of farmers waiting.
* Today's bookings.
* Procurement progress.
* Payment status.
* Crowd level.

---

# 27. Reports & Analytics

The system can provide:

### Daily Reports

* Number of farmers served.
* Number of bookings.
* Average waiting time.
* Completed procurements.

### Centre Reports

* Centre-wise bookings.
* Centre-wise waiting time.
* Centre-wise procurement volume.

### Payment Reports

* Pending payments.
* Completed payments.
* Total payment amount.

Charts can be used to make the information easier to understand.

---

# 28. Smart Features

To make the project stronger for SIH, include:

## Smart Queue Prediction

Estimate waiting time using:

* Farmers ahead.
* Average processing time.
* Number of active counters.
* Current queue speed.

## Smart Slot Recommendation

Recommend less crowded slots to farmers.

Example:

> **Recommended:** 2:00 PM – 2:30 PM
> Expected crowd: Low

## Centre Crowd Prediction

Show:

**Low → Moderate → High**

based on current bookings and queue size.

## Nearby Centre Recommendation

If one centre is highly crowded, suggest another available centre nearby.

---

# 29. User Interface Structure

## Farmer Navigation Bar

**Home | Book Slot | My Queue | Procurement | Payment | History**

Additional:

**Notifications | Profile | Settings**

## Settings

**Language | Appearance | Notifications | Account**

---

# 30. UI/UX Design Requirements

The interface must be:

* Simple.
* Clean.
* Modern.
* Mobile-first.
* Responsive.
* Easy for first-time users.
* Suitable for users with limited technical experience.
* Accessible in multiple Indian languages.

### Design Elements

Use:

* Large buttons.
* Clear icons.
* Simple cards.
* Status badges.
* Progress bars.
* Search.
* Easy navigation.
* Clear confirmation messages.
* Minimal complicated menus.

Important information such as **queue number, slot time, procurement status, and payment status** should be highly visible.

---

# 31. Suggested Technology Stack

## Frontend

* React.js
* HTML
* CSS
* JavaScript
* Responsive CSS framework such as Tailwind CSS or Bootstrap

## Backend

* Node.js
* Express.js

## Database

* MongoDB

## Authentication

* JWT
* OTP verification as an optional feature

## Notifications

* In-app notification system for MVP
* SMS API for future implementation

## Language System

Use a centralized internationalization (i18n) system so that changing the language updates the **entire website**.

---

# 32. Database Structure

## Farmers

* farmerId
* name
* mobile
* location
* farmerIdNumber
* password
* preferredLanguage
* preferredTheme
* createdAt

## Procurement Centres

* centreId
* centreName
* location
* address
* workingHours
* dailyCapacity
* contact

## Slots

* slotId
* centreId
* date
* startTime
* endTime
* capacity
* bookedCount
* status

## Bookings

* bookingId
* farmerId
* centreId
* slotId
* queueNumber
* bookingDate
* status

## Procurement

* procurementId
* bookingId
* cropType
* submittedQuantity
* acceptedQuantity
* qualityStatus
* procurementStatus

## Payments

* paymentId
* procurementId
* amount
* paymentStatus
* paymentDate
* transactionId

## Notifications

* notificationId
* farmerId
* title
* message
* notificationType
* readStatus
* createdAt

---

# 33. Functional Requirements

The system must:

1. Allow farmers to register and login.
2. Allow farmers to select procurement centres.
3. Display available slots.
4. Prevent duplicate and overbooked slots.
5. Generate booking IDs.
6. Generate digital queue tokens.
7. Display real-time queue status.
8. Allow staff to manage queues.
9. Track procurement progress.
10. Track payment progress.
11. Provide notifications.
12. Maintain procurement history.
13. Provide farmer, staff, and admin dashboards.
14. Support multiple languages.
15. Apply the selected language throughout the website.
16. Support Dark Mode and Light Mode.
17. Save the user's language and theme preferences.
18. Provide reports and analytics.

---

# 34. Non-Functional Requirements

## Performance

The system should respond quickly and handle multiple users.

## Security

* Secure authentication.
* Password hashing.
* Role-based access.
* Protected user data.
* Secure API endpoints.

## Scalability

The platform should support multiple procurement centres and a growing number of farmers.

## Accessibility

The platform should use:

* Simple language.
* Large readable text.
* Clear icons.
* Easy navigation.
* Multiple Indian languages.

## Reliability

The system must maintain accurate:

* Booking information.
* Queue numbers.
* Procurement status.
* Payment status.

---

# 35. MVP — What Your Team Should Actually Build First

For the first working SIH prototype, prioritize:

### Farmer Side

**Registration/Login**
↓
**Dashboard**
↓
**Select Centre**
↓
**Book Slot**
↓
**Digital Token**
↓
**Live Queue**
↓
**Notifications**
↓
**Procurement Tracking**
↓
**Payment Tracking**

### Centre Side

**Staff Login**
↓
**Dashboard**
↓
**Today's Bookings**
↓
**Live Queue Management**
↓
**Farmer Processing**
↓
**Procurement Update**
↓
**Payment Update**

### Common Features

**Language Selection**
**Full Website Language Translation**
**Dark Mode / Light Mode**
**Responsive Frontend**

---

# 36. Future Scope

Future versions can include:

* More regional languages.
* Voice-based farmer assistance.
* SMS integration.
* WhatsApp notifications.
* GPS-based centre discovery.
* AI-based queue prediction.
* AI-based demand prediction.
* Aadhaar/official farmer-ID integration where officially permitted.
* Integration with government procurement systems.
* Advanced analytics.
* Offline/low-connectivity support.

---

# 37. Complete User Journey

### Farmer

**Register**
↓
**Login**
↓
**Select Language**
↓
**Select Light/Dark Mode**
↓
**Select Procurement Centre**
↓
**Choose Slot**
↓
**Confirm Booking**
↓
**Receive Digital Token**
↓
**Track Queue**
↓
**Receive Turn Notification**
↓
**Visit Centre**
↓
**Weighing & Quality Check**
↓
**Procurement Completed**
↓
**Payment Processing**
↓
**Payment Completed**
↓
**View History**

---

# 38. Final Project Concept

**Smart Procurement Queue & Slot Management System** is a multilingual, responsive digital platform designed to reduce waiting times and congestion at farmer procurement centres. It provides slot booking, digital tokens, real-time queue tracking, notifications, procurement tracking, and payment tracking while giving procurement-centre staff and administrators powerful tools to manage the complete procurement process.

**Core Flow:**

**Farmer Registration → Slot Booking → Digital Token → Live Queue → Procurement → Payment → Transparent History**

The system combines **Smart Automation + Real-Time Queue Management + Multilingual Accessibility + Dark/Light Mode + Transparent Procurement Tracking** to provide a practical digital solution for farmers.
