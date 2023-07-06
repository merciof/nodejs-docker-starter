class HealthController {
  static async getHealth(_, res) {
    let text = "";

    await new Promise((resolve, _) => {
      setTimeout(() => {
        text = "Olá mundo!";
        resolve(text);
      }, 300);
    });

    //simular set timeout

    return res.status(200).send(text);
  }
}

module.exports = HealthController;
