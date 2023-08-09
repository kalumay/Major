import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  const teamMembers = [
    {
      name: 'Anjan Kumari',
      email: 'anjan@yourdomain.com',
      phone: '+1 (123) 456-7890',
      socialMedia: {
        instagram: 'https://www.instagram.com/anjanakumari9470/',
        facebook: 'https://www.facebook.com/profile.php?id=100037216035677'
      },
      photo: 'anjan.jpg' 
    },
    {
      name: 'Manisha Gupta',
      email: 'manisha@yourdomain.com',
      phone: '+1 (123) 456-7890',
      socialMedia: {
        instagram: 'https://www.instagram.com/manishagupta77777/',
        facebook: 'https://www.facebook.com/profile.php?id=100013990236809'
      },
      photo: 'anjan.jpg' 
    },
    {
      name: 'Manita Khapung',
      email: 'manita@yourdomain.com',
      phone: '+1 (123) 456-7890',
      socialMedia: {
        instagram: 'https://instagram.com/manitakhapung',
        facebook: 'https://www.facebook.com/manita.khapung'
      },
      photo: 'anjan.jpg' 
    },
    {
      name: 'Mikal Paudel',
      email: 'mikalpaudel@gmail.com',
      phone: '+977 9818301497',
      socialMedia: {
        instagram: 'https://www.instagram.com/mikalpaudel/',
        facebook: 'https://www.facebook.com/mikal.paudel',
        photo: 'https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/271198799_602526744171733_975491637172786174_n.jpg?_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=PihmDiEqcLsAX8BYzFq&_nc_ht=scontent.fktm3-1.fna&oh=00_AfD6Jo5h8pMmse6hZYpPDjqYQe0teMNU9oo3d3PxixogbA&oe=64D789EC' 
    },}
  ];

  return (
    <div className="container mt-4">
      <h1 className="text-black">Contact Us</h1>
      <p>
        If you have any questions, suggestions, or feedback regarding our Chrome extension
        or if you need assistance, please feel free to get in touch with us. We're here to help!
      </p>

      <div className="row">
        {teamMembers.map((member, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card">
              <div className="card-body">
                <p className="card-text"><h3>{member.name}</h3></p>
                <p className="card-text">Email: {member.email}</p>
                <p className="card-text">Phone: {member.phone}</p>
                <p className="card-text">
                  Social Media: 
                  <Link to={member.socialMedia.instagram} className="mr-2">Instagram</Link> | 
                  <Link to={member.socialMedia.facebook}>Facebook</Link>
                </p>
              </div>
              <div className="row-md-2">
                  {/* <img src={member.photo} alt={member.name} className="img-fluid" /> */}
                </div>
            </div>
            
          </div>
        ))}
      </div>

      <p>
        We value your input and are committed to continuously improving our extension to better serve your needs.
        Don't hesitate to reach out to us – we look forward to hearing from you!
      </p>
    </div>
  );
}

export default Contact;
