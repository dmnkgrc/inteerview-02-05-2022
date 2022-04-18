import BuyFlow from './BuyFlow/BuyFlow';

export enum ProductIds {
  devIns = 'dev_ins',
  desIns = 'des_ins',
}

export const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: 'Developer Insurance',
  [ProductIds.desIns]: 'Designer Insurance',
};

export { BuyFlow };
