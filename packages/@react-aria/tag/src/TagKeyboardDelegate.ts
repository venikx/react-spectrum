/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {GridCollection} from '@react-types/grid';
import {GridKeyboardDelegate} from '@react-aria/grid';
import {Key} from 'react';
import {Node} from '@react-types/shared';

export class TagKeyboardDelegate<T> extends GridKeyboardDelegate<T, GridCollection<T>> {

  protected isCell(node: Node<T>) {
    return node.type === 'cell' || node.type === 'rowheader' || node.type === 'column';
  }

  getKeyRightOf(key: Key) {
    let item = this.collection.getItem(key);
    if (!item) {
      return;
    }

    return super.getKeyBelow(key);
  }

  getKeyLeftOf(key: Key) {
    let item = this.collection.getItem(key);
    if (!item) {
      return;
    }

    return super.getKeyAbove(key);
  }
}