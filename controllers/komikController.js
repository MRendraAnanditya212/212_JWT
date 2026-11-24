const db = require("../models");
const Komik = db.Komik;

exports.getAllKomik = async (req, res) => {
  try {
    const komiks = await Komik.findAll();
    res.status(200).json({
      message: "Berhasil mengambil semua data komik",
      data: komiks,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getKomikById = async (req, res) => {
  try {
    const komik = await Komik.findByPk(req.params.id);
    if (!komik) {
      return res.status(404).json({ message: "Komik tidak ditemukan" });
    }
    res.status(200).json({
      message: "Berhasil mengambil detail komik",
      data: komik,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createKomik = async (req, res) => {
  try {
    const { title, author, description } = req.body;
    const komik = await Komik.create({ title, author, description });
    res.status(201).json({
      message: "Komik berhasil ditambahkan",
      data: komik,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateKomik = async (req, res) => {
  try {
    const { title, author, description } = req.body;
    const komik = await Komik.findByPk(req.params.id);

    if (!komik) {
      return res.status(404).json({ message: "Komik tidak ditemukan" });
    }

    await komik.update({ title, author, description });
    res.status(200).json({
      message: "Komik berhasil diperbarui",
      data: komik,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteKomik = async (req, res) => {
  try {
    const komik = await Komik.findByPk(req.params.id);

    if (!komik) {
      return res.status(404).json({ message: "Komik tidak ditemukan" });
    }

    await komik.destroy();
    res.status(200).json({ message: "Komik berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};