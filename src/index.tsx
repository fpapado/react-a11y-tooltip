import React from 'react';
import {FauxButton} from 'react-faux-button';
import './styles.css';

export type TooltipPurpose = 'primary' | 'descriptive';

export interface ITooltip {
  /** Whether the Tooltip labels or elaborates on the element */
  purpose: TooltipPurpose;
  /** Render callback for content */
  renderContent: React.ReactNode;
  /** Render callback for tooltip */
  renderTooltip: React.ReactNode;
}

/* Component that provides a Tooltip as the primary label.
 * Useful in cases where the content should be always accessible to screen readers
 * and on interaction for mouse and keyboard.
 * An example would be making a better `abbr` element.
 * Based on https://inclusive-components.design/tooltips-toggletips/, particularly
 * the "Tooltip as Primary Label" use-case.
 *
 * NOTE: the aria-labelledby of the element supersedes the text content of renderContent,
 * in the same way that `title` supersedes text content in abbr.
*/
export const Tooltip: React.SFC<ITooltip> = ({
  purpose,
  renderContent,
  renderTooltip,
  children,
}) => (
  <RandomId>
    {id => (
      <span className="r-tooltip-container">
        {/* Using FauxButton to avoid having to pass on resets from consumers */}
        <FauxButton
          tag="div"
          className="r-tooltip-button"
          aria-labelledby={purpose === 'primary' ? id : undefined}
          aria-describedby={purpose === 'descriptive' ? id : undefined}
        >
          {children}
        </FauxButton>
        <div className="r-tooltip-tooltip" role="tooltip" id={id}>
          {renderTooltip}
        </div>
      </span>
    )}
  </RandomId>
);

// Utils
/** Render-prop component that passes a random id */
interface IRandomId {
  prefix?: string;
  children: (id: string) => React.ReactNode;
}

class RandomId extends React.Component<IRandomId> {
  labelId: string;

  constructor(props: IRandomId) {
    super(props);

    // Allocate a random id on init
    this.labelId =
      this.props.prefix +
      Math.random()
        .toString(36)
        .substr(2, 9);
  }

  render() {
    const {children} = this.props;
    return children(this.labelId);
  }
}
