import * as dagre from 'dagre';

export interface BaseInfo {
  name: string;
  label?: string;
  composition?: string;
}

export interface Node extends BaseInfo {
  type?: string;
  icon?: string;
}

export interface Composition extends BaseInfo {
  border?: string;
}

export interface Edge extends BaseInfo {
  from: string;
  to: string;
  type?: string;
}

export interface GraphModel {
  layout?: dagre.GraphLabel;
  compositions?: Array<Composition>;
  nodes?: Array<Node>;
  edges?: Array<Edge>;
}
