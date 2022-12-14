import { app } from "./app";
import { AppDataSource } from "./data-source";

const port = 3333;

(async () => {
  await AppDataSource.initialize().catch((error) => {
    console.error("Error during Data Source initialization", error);
  });

  app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });
})();
