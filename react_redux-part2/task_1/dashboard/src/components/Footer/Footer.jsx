import { StyleSheet, css } from "aphrodite";
import { useSelector } from "react-redux";
import { getCurrentYear, getFooterCopy } from "../../utils/utils";

export default function Footer() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className={css(styles.footer)}>
      <p>
        Copyright {getCurrentYear()} - {getFooterCopy(true)}
      </p>
      {isLoggedIn && <a href="#">Contact us</a>}
    </div>
  );
}

const styles = StyleSheet.create({
  footer: {
    // style//}
  },
});
