import app from './app';
import { sequelize } from './models';
import { GAME_RESET_INTERVAL_MS, resetGameState, seedCompanies } from './seeders/seedCompanies';

const PORT = Number(process.env.PORT || 3000);

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión con PostgreSQL establecida.');

    await sequelize.sync({ alter: true });
    console.log('✅ Modelos sincronizados con la base de datos.');

    await seedCompanies();
    console.log('✅ Empresas iniciales sincronizadas.');

    setInterval(() => {
      resetGameState()
        .then(() => console.log('✅ Estado de juego reiniciado.'))
        .catch((error) => console.error('❌ Error al reiniciar estado de juego:', error));
    }, GAME_RESET_INTERVAL_MS).unref();

    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error al iniciar el servidor:', error);
    process.exit(1);
  }
}

startServer();
