// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 */
import logoDark from 'assets/logo/full_logo_dark.png';
import logo from 'assets/logo/full_logo_light.png';
import PropTypes from 'prop-types';

// ==============================|| LOGO SVG ||============================== //

const LogoMain = ({ reverse }) => {
  const theme = useTheme();
  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     */
    <img src={theme.palette.mode === 'dark' || reverse ? logo : logoDark} alt="Logo" width="120" />

    // <>
    //   <svg width="118" height="35" viewBox="0 0 118 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    //     <path
    //       d="M4.63564 15.8644L6.94797 13.552L6.95038 13.5496H11.3006L9.56969 15.2806L9.12278 15.7275L7.35024 17.5L7.56977 17.7201L17.5 27.6498L27.6498 17.5L25.8766 15.7275L25.7518 15.602L23.6994 13.5496H28.0496L28.052 13.552L29.8644 15.3644L32 17.5L17.5 32L3 17.5L4.63564 15.8644ZM17.5 3L25.8784 11.3784H21.5282L17.5 7.35024L13.4718 11.3784H9.12158L17.5 3Z"
    //       fill={theme.palette.primary.dark}
    //     />
    //     <path
    //       d="M7.35025 17.5L9.1228 15.7275L9.5697 15.2805L7.83937 13.5496H6.95039L6.94798 13.552L4.63564 15.8644L6.8551 18.073L7.35025 17.5Z"
    //       fill="url(#paint0_linear)"
    //     />
    //     <path
    //       d="M25.8767 15.7275L27.6498 17.5L27.4743 17.6755L27.4749 17.6761L29.8644 15.3644L28.0521 13.552L28.0497 13.5496H27.8736L25.7518 15.602L25.8767 15.7275Z"
    //       fill="url(#paint1_linear)"
    //     />
    //     <path
    //       d="M6.94549 13.5496L6.9479 13.552L9.12272 15.7275L17.4999 24.1041L28.0544 13.5496H6.94549Z"
    //       fill={theme.palette.primary.main}
    //     />
    //     <path
    //       d="m46.338394 30.28l0 -24.8125l3.296875 0l0 21.890625l12.203125 0l0 2.921875l-15.5 0zm19.274155 0l0 -24.8125l3.296875 0l0 21.890625l12.203125 0l0 2.921875l-15.5 0zm19.97728 0l0 -24.8125l3.28125 0l0 24.8125l-3.28125 0zm9.237991 0l0 -24.8125l16.734375 0l0 2.9375l-13.453125 0l0 7.671875l11.640625 0l0 2.9375l-11.640625 0l0 11.265625l-3.28125 0z"
    //       fill={theme.palette.mode === 'dark' || reverse ? theme.palette.common.white : theme.palette.common.black}
    //       fillOpacity="0.85"
    //     />
    //     <defs>
    //       <linearGradient id="paint0_linear" x1="8.62526" y1="14.0888" x2="5.56709" y2="17.1469" gradientUnits="userSpaceOnUse">
    //         <stop stopColor={theme.palette.primary.darker} />
    //         <stop offset="0.9637" stopColor={theme.palette.primary.dark} stopOpacity="0" />
    //       </linearGradient>
    //       <linearGradient id="paint1_linear" x1="26.2675" y1="14.1279" x2="28.7404" y2="16.938" gradientUnits="userSpaceOnUse">
    //         <stop stopColor={theme.palette.primary.darker} />
    //         <stop offset="1" stopColor={theme.palette.primary.dark} stopOpacity="0" />
    //       </linearGradient>
    //     </defs>
    //   </svg>
    // </>
  );
};

LogoMain.propTypes = {
  reverse: PropTypes.bool
};

export default LogoMain;
