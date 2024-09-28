const QuizService = require("../services/quiz.service");

class QuizController {

	static async findAll(req, res, next) {
		try {
			const quiz = await QuizService.findAll();
			res.status(200).json(quiz);
		} catch (error) {
			next(error);
		}
	}

	static async findById(req, res, next) {

		try {
			const quiz = await QuizService.findById(req.params.id);
			res.status(200).json(quiz);
		} catch (error) {
			next(error);
		}
	}

	static async create(req, res, next) {

		try {
			const quiz = await QuizService.create(req.body);
			res.status(201).json(quiz);
		} catch (error) {
			next(error);
		}
	}

	static async update(req, res, next) {

		try {
			const quiz = await QuizService.update(req.params.id, req.body);
			res.status(200).json(quiz);
		} catch (error) {
			next(error);
		}
	}

	static async delete(req, res, next) {

		try {
			const quiz = await QuizService.delete(req.params.id);
			res.status(200).json(quiz);
		} catch (error) {
			next(error);
		}
	}
}

module.exports = QuizController