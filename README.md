# PICKEDUKOL - Pickleball Court Booking System

PICKEDUKOL is a web-based pickleball court booking and reservation system built with Python Flask and MySQL.

The system allows customers to view available pickleball courts, select a date and time slot, provide their booking information, and complete the reservation process.

## Features

### Customer
- View landing page
- View pickleball court information
- Browse court gallery
- View available booking slots
- Select court and schedule
- Enter customer information
- Make a booking
- View booking confirmation
- Look up existing bookings

### Admin
- Admin login
- Dashboard
- Manage courts
- Manage customers
- View bookings
- View booking details
- Manage payments
- Generate reports

## Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Python
- Flask

### Database
- MySQL

### Development Tools
- Visual Studio Code
- MySQL Workbench
- Git
- GitHub

## Project Structure

```text
pickedukol-booking-system/
│
├── app.py
├── config.py
├── requirements.txt
│
├── database/
│   └── schema.sql
│
├── models/
│   ├── admin.py
│   ├── booking.py
│   ├── court.py
│   ├── customer.py
│   ├── operating_hours.py
│   └── payment.py
│
├── routes/
│   ├── admin.py
│   ├── booking.py
│   ├── main.py
│   └── payment.py
│
├── static/
│   ├── css/
│   ├── images/
│   └── js/
│
└── templates/
    ├── admin/
    ├── base.html
    ├── index.html
    ├── courts.html
    ├── booking.html
    ├── customer_info.html
    ├── payment.html
    └── booking_confirmation.html
