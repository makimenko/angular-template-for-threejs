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

  public static jsonToGraph(yaml: GraphModel): dagre.graphlib.Graph {
    const g = new dagre.graphlib.Graph({
      compound: true
    });

    g.setGraph(
      this.getLayout(yaml)
    );

    g.setDefaultEdgeLabel(function () {
      return {};
    });

    this.updateGraph(g, yaml);

    dagre.layout(g);
    return g;
  }

  public static updateNodes(g: dagre.graphlib.Graph, yaml: GraphModel) {
    if (yaml.nodes) {
      yaml.nodes.forEach((node: Node) => {
        g.setNode(node.id, {label: node.label});
      });
    }
  }

  public static updateEdges(g: dagre.graphlib.Graph, yaml: GraphModel) {
    if (yaml.edges) {
      yaml.edges.forEach((edge: Edge) => {
        g.setEdge(edge.from, edge.to);
      });
    }
  }

  public static updateComposition(g: dagre.graphlib.Graph, yaml: GraphModel) {
    if (yaml.composition) {
      yaml.composition.forEach((composition: Composition) => {
        g.setParent(composition.child, composition.parent);
      });
    }
    return g;
  }

  public static updateGraph(g: dagre.graphlib.Graph, yaml: GraphModel) {
    this.updateNodes(g, yaml);
    this.updateEdges(g, yaml);
    this.updateComposition(g, yaml);
  }

  public static getLayout(yaml: GraphModel): dagre.GraphLabel {
    const layout: dagre.GraphLabel = {};
    if (yaml.layout) {
      if (yaml.layout.rankdir) {
        layout.rankdir = yaml.layout.rankdir;
      }

      if (yaml.layout.align) {
        layout.align = yaml.layout.align;
      }
    }
    return layout;
  }

}
