import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { requests } from '../data/dummyData'

function MyRequests() {
  // assuming these are the requests created by the current requester
  const [myRequests, setMyRequests] = useState([
    ...requests.map((request) => ({
      ...request,
      requesterPhone: '+880 1712-445566',
      donorPhone:
        request.acceptedBy === 'Tanvir Hasan'
          ? '+880 1711-223344'
          : request.acceptedBy === 'Nusrat Jahan'
          ? '+880 1719-998877'
          : null,
    })),
  ])

  const handleMarkReceived = (id) => {
    setMyRequests((prev) =>
      prev.map((request) =>
        request.id === id
          ? {
              ...request,
              status: 'Completed',
            }
          : request
      )
    )
  }

  return (
    <div>
      <PageHeader
        title="My Requests"
        subtitle="Track the status of the blood requests you created."
      />

      <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-5 shadow-md shadow-slate-200/50 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        {myRequests.map((request) => {
          const isAccepted =
            request.status === 'Accepted' ||
            request.status === 'Pending Confirmation' ||
            request.status === 'Completed'

          const donationDone = request.status === 'Pending Confirmation'
          const completed = request.status === 'Completed'

          return (
            <div
              key={request.id}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">
                    {request.patientName}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Request ID: #{request.id}
                  </p>
                </div>

                <span
                  className={`inline-block rounded-full px-4 py-2 text-sm font-semibold ${
                    request.status === 'Open'
                      ? 'bg-yellow-100 text-yellow-700'
                      : request.status === 'Accepted'
                      ? 'bg-blue-100 text-blue-700'
                      : request.status === 'Pending Confirmation'
                      ? 'bg-orange-100 text-orange-700'
                      : 'bg-green-100 text-green-700'
                  }`}
                >
                  {request.status}
                </span>
              </div>

              <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-5 shadow-md shadow-slate-200/50 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <p>
                  <span className="font-semibold">Blood Group:</span>{' '}
                  {request.bloodGroup}
                </p>
                <p>
                  <span className="font-semibold">Units Needed:</span>{' '}
                  {request.unitsNeeded}
                </p>
                <p>
                  <span className="font-semibold">Hospital:</span>{' '}
                  {request.hospital}
                </p>
                <p>
                  <span className="font-semibold">Location:</span>{' '}
                  {request.location}
                </p>
                <p>
                  <span className="font-semibold">Urgency:</span>{' '}
                  {request.urgency}
                </p>
                <p>
                  <span className="font-semibold">Date Needed:</span>{' '}
                  {request.dateNeeded}
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-5 shadow-md shadow-slate-200/50 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <p className="text-sm font-semibold text-slate-700">Notes</p>
                <p className="mt-2 text-sm text-slate-600">{request.notes}</p>
              </div>

              {!isAccepted && (
                <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-5 shadow-md shadow-slate-200/50 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <p className="text-sm font-semibold text-yellow-700">
                    Waiting for a donor to accept this request.
                  </p>
                </div>
              )}

              {isAccepted && (
                <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-5 shadow-md shadow-slate-200/50 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <h4 className="text-sm font-bold text-slate-800">
                    Donor Information
                  </h4>
                  <div className="mt-2 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
                    <p>
                      <span className="font-semibold">Accepted By:</span>{' '}
                      {request.acceptedBy || 'Not assigned yet'}
                    </p>
                    <p>
                      <span className="font-semibold">Donor Contact:</span>{' '}
                      {request.donorPhone || 'Not available'}
                    </p>
                  </div>

                  {request.donorPhone && (
                    <a
                      href={`tel:${request.donorPhone}`}
                      className="mt-4 inline-block rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white"
                    >
                      Contact Donor
                    </a>
                  )}
                </div>
              )}

              {donationDone && (
                <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-5 shadow-md shadow-slate-200/50 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <button
                    onClick={() => handleMarkReceived(request.id)}
                    className="rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white"
                  >
                    Mark Donation Received
                  </button>

                  <div className="rounded-xl bg-orange-50 px-4 py-3 text-sm text-orange-700">
                    Donor marked the donation as done. Please confirm if blood
                    has been received.
                  </div>
                </div>
              )}

              {completed && (
                <div className="mt-5 rounded-2xl border border-green-200 bg-green-50 p-4">
                  <p className="text-sm font-semibold text-green-700">
                    Donation confirmed successfully.
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyRequests