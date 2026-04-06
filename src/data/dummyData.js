export const currentUser = {
  id: 1,
  name: 'Afsana Rahman',
  email: 'afsana@example.com',
  phone: '+880 1711-223344',
  location: 'Dhanmondi, Dhaka',
  bloodGroup: 'B+',
  role: 'user',
  donorApplied: true,
  donorVerified: false,
  chronicDisease: 'No',
  bmi: 22.4,
}

export const stats = [
  { title: 'Active Requests', value: 14 },
  { title: 'Available Donors', value: 86 },
  { title: 'Successful Donations', value: 42 },
  { title: 'Pending Confirmations', value: 5 },
]

export const donors = [
  {
    id: 1,
    name: 'Tanvir Hasan',
    bloodGroup: 'A+',
    age: 25,
    gender: 'Male',
    city: 'Dhaka',
    area: 'Mirpur',
    lastDonation: '3 months ago',
    verified: true,
  },
  {
    id: 2,
    name: 'Nusrat Jahan',
    bloodGroup: 'O-',
    age: 23,
    gender: 'Female',
    city: 'Dhaka',
    area: 'Uttara',
    lastDonation: '5 months ago',
    verified: true,
  },
  {
    id: 3,
    name: 'Samiul Islam',
    bloodGroup: 'B+',
    age: 28,
    gender: 'Male',
    city: 'Chattogram',
    area: 'GEC',
    lastDonation: '2 months ago',
    verified: false,
  },
]

export const requests = [
  {
    id: 101,
    patientName: 'Farhan Ahmed',
    bloodGroup: 'O+',
    unitsNeeded: 2,
    hospital: 'Square Hospital',
    location: 'Panthapath, Dhaka',
    locationMeta: {
      lat: 23.753028,
      lng: 90.38171,
    },
    urgency: 'Critical',
    dateNeeded: '2026-04-06',
    status: 'Open',
    requester: 'Mariam Islam',
    acceptedBy: null,
    notes: 'Urgent surgery case. Donor should contact immediately.',
  },
  {
    id: 102,
    patientName: 'Sadia Akter',
    bloodGroup: 'B-',
    unitsNeeded: 1,
    hospital: 'CMH Dhaka',
    location: 'Dhaka Cantonment',
    locationMeta: {
      lat: 23.814334,
      lng: 90.398087,
    },
    urgency: 'Medium',
    dateNeeded: '2026-04-07',
    status: 'Accepted',
    requester: 'Rafiq Hasan',
    acceptedBy: 'Tanvir Hasan',
    notes: 'Need replacement donor before noon.',
  },
  {
    id: 103,
    patientName: 'Imran Kabir',
    bloodGroup: 'A-',
    unitsNeeded: 3,
    hospital: 'Evercare Hospital',
    location: 'Bashundhara, Dhaka',
    locationMeta: {
      lat: 23.810247,
      lng: 90.431205,
    },
    urgency: 'High',
    dateNeeded: '2026-04-08',
    status: 'Pending Confirmation',
    requester: 'Shila Noor',
    acceptedBy: 'Nusrat Jahan',
    notes: 'Donation done, waiting for requester confirmation.',
  },
]

export const donationHistory = [
  {
    id: 1,
    date: '2026-01-14',
    recipient: 'Square Hospital',
    bloodGroup: 'B+',
    status: 'Completed',
  },
  {
    id: 2,
    date: '2025-09-10',
    recipient: 'Apollo / Evercare',
    bloodGroup: 'B+',
    status: 'Completed',
  },
]

