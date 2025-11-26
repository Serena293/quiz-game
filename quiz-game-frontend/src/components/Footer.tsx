const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="position-fixed bottom-0 text-center w-100 bg-body-tertiary">
        <p className="mt-3">Quiz Game &middot; {year}</p>
    </div>)
    }


export default Footer