import {DagreUtils} from './dagre-utils';
import {GraphModel} from './dagre-model';
import * as dagre from 'dagre';

describe('dagre-layout', () => {
  describe('dagre-utils', () => {

    it('single node', () => {
      const model: GraphModel = {
        layout: {
          width: 100,
          height: 100
        },
        nodes: [{
          name: 'user',
          model: 'user',
        }]
      };
      const graph: dagre.graphlib.Graph = DagreUtils.modelToGraph(model);
      expect(graph.nodes().length).toBe(1);
      expect(graph.nodes()[0]).toBe('user');
    });

    it('basic graph', () => {
      const model: GraphModel = {
        layout: {
          width: 100,
          height: 100
        },
        nodes: [{
          name: 'user',
          model: 'user',
        }, {
          name: 'spa',
          type: 'compact',
          icon: 'connected_tv'
        }, {
          name: 'api',
          composition: 'backend'
        }],
        edges: [{
          name: 'e1',
          from: 'user',
          to: 'spa'
        }, {
          name: 'e2',
          from: 'spa',
          to: 'api'
        }],
        compositions: [{
          name: 'backend'
        }]
      };
      const graph: dagre.graphlib.Graph = DagreUtils.modelToGraph(model);
      expect(graph.nodes().length).toBe(3 /* nodes */ + 1 /* composition */);
      expect(graph.edges().length).toBe(2);
    });


  });
});
