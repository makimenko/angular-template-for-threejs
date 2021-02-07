import * as dagre from 'dagre';

export interface Node {
  name: string;
  label: string;
}

export interface Edge {
  name: string;
  from: string;
  to: string;
}

export interface Composition {
  parent: string;
  child: string;
}

export interface GraphModel {
  layout?: dagre.GraphLabel;
  nodes?: Array<Node>;
  edges?: Array<Edge>;
  composition?: Array<Composition>;
}

/**
 * WIKI: https://github.com/dagrejs/dagre/wiki
 */
export class DagreUtils {

  public static modelToGraph(model: GraphModel): dagre.graphlib.Graph {
    const g = new dagre.graphlib.Graph({
      compound: true,
      multigraph: true
    });

    g.setGraph(
      this.getLayout(model)
    );

    g.setDefaultEdgeLabel(function () {
      return {};
    });

    this.updateGraph(g, model);

    // console.log('DagreUtils.layout', g);
    dagre.layout(g);
    return g;
  }

  public static updateNodes(g: dagre.graphlib.Graph, model: GraphModel) {
    if (model.nodes) {
      model.nodes.forEach((node: Node) => {
        g.setNode(node.name, {label: node.label, width: 15, height: 15});
      });
    }
  }

  public static updateEdges(g: dagre.graphlib.Graph, model: GraphModel) {
    if (model.edges) {
      model.edges.forEach((edge: Edge) => {
        g.setEdge(edge.from, edge.to, {name: edge.name});
      });
    }
  }

  public static updateComposition(g: dagre.graphlib.Graph, model: GraphModel) {
    if (model.composition) {
      model.composition.forEach((composition: Composition) => {
        g.setParent(composition.child, composition.parent);
      });
    }
    return g;
  }

  public static updateGraph(g: dagre.graphlib.Graph, model: GraphModel) {
    this.updateNodes(g, model);
    this.updateEdges(g, model);
    this.updateComposition(g, model);
  }

  public static getLayout(model: GraphModel): dagre.GraphLabel {
    const layout: dagre.GraphLabel = model.layout;
    return layout;
  }

}
