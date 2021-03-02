import * as dagre from 'dagre';
import {BaseInfo, Edge, GraphModel, Node} from './dagre-model';


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

    // console.log('DagreUtils.layout model', model);
    // console.log('DagreUtils.layout', g);
    dagre.layout(g);
    return g;
  }

  public static updateBaseInfo(g: dagre.graphlib.Graph, baseInfo: Array<BaseInfo>) {
    if (baseInfo) {
      baseInfo.forEach((node: Node) => {
        g.setNode(node.name, {label: node.label, width: 18, height: 18});
        if (node.composition) {
          g.setParent(node.name, node.composition);
        }
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

  public static updateGraph(g: dagre.graphlib.Graph, model: GraphModel) {
    this.updateBaseInfo(g, model.compositions);
    this.updateBaseInfo(g, model.nodes);
    this.updateEdges(g, model);
  }

  public static getLayout(model: GraphModel): dagre.GraphLabel {
    const layout: dagre.GraphLabel = model.layout;
    return layout;
  }

}
