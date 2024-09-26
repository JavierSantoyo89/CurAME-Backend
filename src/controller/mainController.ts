import { Request, Response } from 'express'

const mainControler = {
	// ?---------------------------------------------------------------------------------------- //
	// *------------- Controladores para el index y documentacion de los proyectos ------------* //
	// ?======================================================================================== //
	index: (_req: Request, res: Response) => {
		// res.send('Este es el controlador del estadisticas')
		// res.render('landingPage')
		res.json('Prueba de funcionamiento del index')
		// res.status(404).json({ error: 'En controlador del estadisticas' })
	},
	statistics: (_req: Request, res: Response) => {
		res.send('Este es el controlador del estadisticas')

	},
}

export default mainControler
