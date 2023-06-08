import type { Worker } from 'node:worker_threads';

import { type PoolEvent, PoolEvents, type PoolOptions } from 'poolifier';

export enum WorkerProcessType {
  workerSet = 'workerSet',
  dynamicPool = 'dynamicPool',
  staticPool = 'staticPool',
}

export type SetInfo = {
  size: number;
  runningElements: number;
  elementsPerWorker: number;
};

export enum WorkerSetEvents {
  error = 'error',
}

export const WorkerEvents = {
  ...PoolEvents,
  ...WorkerSetEvents,
} as const;
export type WorkerEvents = PoolEvent | WorkerSetEvents;

export type MessageHandler<T> = (this: T, message: unknown) => void;

export type WorkerOptions = {
  workerStartDelay?: number;
  elementStartDelay?: number;
  poolMaxSize: number;
  poolMinSize: number;
  elementsPerWorker?: number;
  poolOptions?: PoolOptions<Worker>;
  messageHandler?: MessageHandler<Worker>;
};

export type WorkerData = Record<string, unknown>;

export type WorkerSetElement = {
  worker: Worker;
  numberOfWorkerElements: number;
};

export type WorkerMessage<T extends WorkerData> = {
  id: WorkerMessageEvents;
  data: T;
};

export enum WorkerMessageEvents {
  startWorkerElement = 'startWorkerElement',
}
