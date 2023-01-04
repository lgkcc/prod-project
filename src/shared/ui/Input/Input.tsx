import {
  ChangeEvent, FC, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cn from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import classes from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    additionalCls?: string;
    value?: string;
    onChange?: (value:string) => void;
    autoFocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    additionalCls, value, onChange, type = 'text', placeholder, autoFocus, ...otherProps
  } = props;
  const [focus, setFocus] = useState(false);
  const [symbols, setSymbols] = useState(0);
  const inputRef = useRef<HTMLInputElement>();
  const { t } = useTranslation();
  useEffect(() => {
    if (autoFocus) {
      console.log(123);
      setFocus(true);
      inputRef.current.focus();
    }
  }, [autoFocus]);
  const onFocus = () => setFocus(true);
  const onBlur = () => setFocus(false);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setSymbols(e.target.value.length);
  };
  const onSelect = (e: any) => {
    setSymbols(e?.target?.selectionStart || 0);
  };
  return (
    <div className={cn(classes.inputWrapper, {}, [additionalCls])}>
      <span className={classes.placeholder}>
        {
          placeholder && `${placeholder}>`
        }
      </span>
      <div className={classes.caretWrapper}>
        {
          focus && <span className={classes.caret} style={{ left: `${symbols * 8.8}px` }} />
        }
        <input
          type={type}
          ref={inputRef}
          className={classes.input}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          onChange={onChangeHandler}
          onSelect={onSelect}
        />
      </div>
    </div>
  );
});
