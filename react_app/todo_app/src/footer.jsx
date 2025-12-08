
// Add a new component for the Footer
export function Footer(props) {
  const defaultMessage = "Copyright © 2023 My Website. All rights reserved.";

  return (
    <footer>
      <p>{props.message}</p>
      <p>{defaultMessage}</p>
    </footer>
  );
}