interface ListItem {
  title: string,
  id: string,
}

interface Entity {
  title: string,
  lifeForm: string,
  class: string,
  rootSystem: string,
  sheetType: string,
  vinationType: string,
  flowerType: string,
  fetusType: string,
  distributeType: string,
  environmentType: string,
}

interface List {
  items: Array<ListItem>,
  loading: boolean,
  error: string,
}

interface TargetCard {
  entity: Entity,
  loading: boolean,
  error: string,
}

export interface IAppState {
  list: List,
  targetCard: TargetCard,
};

export const initialState: IAppState = {
  list: {
    items: null,
    loading: false,
    error: null,
  },
  targetCard: {
    entity: null,
    loading: false,
    error: null,
  },
}
