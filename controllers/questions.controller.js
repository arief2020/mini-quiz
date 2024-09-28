const QuestionService = require("../services/questions.service");

class QuestionController {

	static async findAll(req, res, next) {
		try {
			const questions = await QuestionService.findAll();
			res.status(200).json(questions);
		} catch (error) {
			next(error);
		}
	}

	static async findById(req, res, next) {

		try {
			const question = await QuestionService.findById(req.params.id);
			res.status(200).json(question);
		} catch (error) {
			next(error);
		}
	}

	static async create(req, res, next) {

		try {
			const question = await QuestionService.create(req.body);
			res.status(201).json(question);
		} catch (error) {
			next(error);
		}
	}

	static async update(req, res, next) {

		try {
			const question = await QuestionService.update(req.params.id, req.body);
			res.status(200).json(question);
		} catch (error) {
			next(error);
		}
	}

	static async delete(req, res, next) {

		try {
			const question = await QuestionService.delete(req.params.id);
			res.status(200).json(question);
		} catch (error) {
			next(error);
		}
	}
}

module.exports = QuestionController