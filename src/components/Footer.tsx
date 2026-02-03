const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p className='text-sm text-gray-400 text-center mt-4 py-8'>
        &copy; {currentYear} Thomas Woroniak Photography. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
