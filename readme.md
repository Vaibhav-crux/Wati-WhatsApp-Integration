# Wati-WhatsApp-Integration

Wati provides an easy and simple way to integrate the API for sending information to WhatsApp. This repository demonstrates how WATI can be integrated for sending messages on WhatsApp.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [Testing](#testing)

## Introduction

This project is a demonstration of integrating WATI for sending messages on WhatsApp. It provides a straightforward approach to using the WATI API to send template messages and manage communication.

## Features

- Send template messages via WhatsApp using WATI API
- Easy integration with existing systems
- Configurable message templates
- Simple and clean codebase for quick understanding and deployment

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Vaibhav-crux/Wati-WhatsApp-Integration.git
   cd Wati-WhatsApp-Integration
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Configuration

1. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   WATI_API_KEY=your_wati_api_key
   WATI_BASE_URL=https://api.wati.io/v1
   ```

2. Update the `sendTemplateMessage.js` file with your template details and recipient information.

## Usage

1. To send a template message, run the following command:
   ```bash
   node sendTemplateMessage.js
   ```

2. The script will send a predefined template message to the specified recipient using the WATI API.

## Testing

1. To run the tests, use the following command:
   ```bash
   npm test
   ```

2. Ensure you have the necessary test configurations and mock data set up.
