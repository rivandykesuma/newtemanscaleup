import React, { useState } from "react";
import { CiFacebook, CiInstagram, CiYoutube } from "react-icons/ci";
import { BsTiktok, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
}

export default function SosmedIconComponents({ className }: Props) {
  const [nameClient, setNameClient] = useState("");
  const [igAccountClient, setIgAccountClient] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => setShowForm(true);
  const handleHideForm = () => setShowForm(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Haloo kak.. Saya Mau konsultasi seputar layanan TemanScaleup`;
    window.open(
      `https://api.whatsapp.com/send/?phone=6285735106764&text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
    setNameClient("");
    setIgAccountClient("");
    handleHideForm();
  };
  return (
    <>
      <Link
        to="https://www.facebook.com/profile.php?id=100094087694313"
        target="_blank"
      >
        <CiFacebook className="text-white" />
      </Link>
      <Link to="https://www.instagram.com/teman.scaleup/" target="_blank">
        <CiInstagram className="text-white" />
      </Link>
      <Link
        to="https://www.tiktok.com/@temanscaleup?lang=id-ID"
        target="_blank"
      >
        <BsTiktok className="text-white" />
      </Link>
      <Link
        to="https://www.youtube.com/channel/UCU5YwDMxQ6lx2cQDWHKouCg"
        target="_blank"
      >
        <CiYoutube className="text-white" />
      </Link>
      <Link
        to="https://www.linkedin.com/company/92608951/admin/feed/posts/"
        target="_blank"
      >
        <BsLinkedin className="text-white" />
      </Link>
      <Link to="#" target="_blank">
        <BsWhatsapp className="text-white" onClick={handleSubmit} />
      </Link>
    </>
  );
}
