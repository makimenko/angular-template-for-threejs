import * as dagre from 'dagre';


export interface Node {
  id: string;
  label: string;
}

export interface Edge {
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

export class DagreUtils {

  public static modelToGraph(model: GraphModel): dagre.graphlib.Graph {
    const g = new dagre.graphlib.Graph({
      compound: true
    });

    g.setGraph(
      this.getLayout(model)
    );

    g.setDefaultEdgeLabel(function () {
      return {};
    });

    this.updateGraph(g, model);

    dagre.layout(g);
    return g;
  }

  public static updateNodes(g: dagre.graphlib.Graph, model: GraphModel) {
    if (model.nodes) {
      model.nodes.forEach((node: Node) => {
        g.setNode(node.id, {label: node.label});
      });
    }
  }

  public static updateEdges(g: dagre.graphlib.Graph, model: GraphModel) {
    if (model.edges) {
      model.edges.forEach((edge: Edge) => {
        g.setEdge(edge.from, edge.to);
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
    const layout: dagre.GraphLabel = {};
    if (model.layout) {
      if (model.layout.rankdir) {
        layout.rankdir = model.layout.rankdir;
      }

      if (model.layout.align) {
        layout.align = model.layout.align;
      }
    }
    return layout;
  }

}
