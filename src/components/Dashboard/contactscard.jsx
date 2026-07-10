import { FaPhoneAlt, FaUserCircle } from "react-icons/fa";

function ContactsCard() {

  const contacts = [
    {
      id: 1,
      name: "Mom",
      phone: "+91 98765 43210"
    },
    {
      id: 2,
      name: "Brother",
      phone: "+91 98765 12345"
    },
    {
      id: 3,
      name: "Best Friend",
      phone: "+91 91234 56789"
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        👨‍👩‍👧 Trusted Contacts
      </h2>

      <div className="space-y-4">

        {contacts.map((contact) => (

          <div
            key={contact.id}
            className="flex justify-between items-center border rounded-xl p-4 hover:shadow-md transition"
          >

            <div className="flex items-center gap-4">

              <FaUserCircle className="text-4xl text-pink-600" />

              <div>

                <h3 className="font-semibold text-lg">
                  {contact.name}
                </h3>

                <p className="text-gray-600">
                  {contact.phone}
                </p>

              </div>

            </div>

            <button
              className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-lg flex items-center gap-2 transition"
            >
              <FaPhoneAlt />
              Call
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ContactsCard;