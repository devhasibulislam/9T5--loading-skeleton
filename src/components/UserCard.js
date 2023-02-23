import React from "react";

const UserCard = ({
  index,
  gender,
  title,
  first,
  last,
  email,
  phone,
  large,
}) => {
  return (
    <>
      <div
        key={index}
        className="d-flex col-lg-3 col-md-4 px-1 py-3 border rounded"
        style={{ columnGap: "1rem" }}
      >
        <img
          src={large}
          alt="avatar"
          height={50}
          width={50}
          loading="lazy"
          className="rounded-circle"
        />
        <div className="d-flex flex-column" style={{ rowGap: ".3rem" }}>
          <p className="mb-0 fw-bold">{(title, first, last)}</p>
          <p className="mb-0 text-decoration-underline">{email}</p>
          <p className="mb-0 text-decoration-line-through">{phone}</p>
          <p
            className="mb-0 bg-info px-1 rounded-pill"
            style={{ width: "fit-content" }}
          >
            {gender}
          </p>
        </div>
      </div>
    </>
  );
};

export default UserCard;
