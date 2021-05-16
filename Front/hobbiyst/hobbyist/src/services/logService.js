//import * as Sentry from "@sentry/browser";

function init() {
  // Sentry.init({
  //   dsn:
  //     "https://4741a1e02b8f4a81b5c37cd0c28ac0e8@o507371.ingest.sentry.io/5598409",
  // });
}

function log(error) {
  console.log(error);
  //Sentry.captureException(error);
}
const logger = {
  init,
  log,
};
export default logger;
