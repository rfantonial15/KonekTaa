// pages/contact.js
import React from 'react';
import Card from '@/components/Card';
import CallList from '@/components/CallList';

const Contact = () => {
  return (
    <section className="flex flex-col items-center gap-10 text-gray-900 p-10 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-white mb-10">Contact</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl bg-dark-1">
        <Card
          name="Christian1 Macatangay"
          email="christian.macatangay@ustp.edu.ph"
          course="Bachelor of Science in Information Technology"
          imgURL="/icons/join-meeting.svg"
          details=""
        />
        <Card
          name="Nap Carlo Baclayon"
          email="baclayon.nap@gmail.com"
          course="Bachelor of Science in Information Technology"
          imgURL="/icons/join-meeting.svg"
          details=""
        />
        <Card
          name="Randulf Fantonial"
          email="fantonial.randulf@gmail.com"
          course="Bachelor of Science in Information Technology"
          imgURL="/icons/join-meeting.svg"
          details=""
        />
        <Card
          name="Yul John Jaranilla"
          email="yuljhon.jaranilla@ustp.edu.ph"
          course="Bachelor of Science in Information Technology"
          imgURL="/icons/join-meeting.svg"
          details=""
        />
      </div>

      <CallList type="contact" />
    </section>
  );
};

export default Contact;
