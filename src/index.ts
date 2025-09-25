import "dotenv/config";
import app from "./app";
import { connectDB } from "./config/db.config";
import { initModels } from "./models";

const PORT = process.env.PORT || 3000;

(async () => {
  await connectDB();
  await initModels();

  app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
  });
})();
