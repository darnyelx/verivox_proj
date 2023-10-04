import { TariffModel } from '../factory/TariffModel';
import { VerivoxProvider } from '../factory/TariffProviders/VerivoxProvider';
import { Request, Response } from 'express';

export const compareTariffs= (req: Request, res: Response) => {
    const verivoxProvider = new VerivoxProvider()
    const tariffModel = new TariffModel(verivoxProvider);
    res.json({ message: 'Success', data: tariffModel.compare(req.body.consumption) });
};


