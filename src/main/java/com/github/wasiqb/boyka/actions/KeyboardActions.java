/*
 * MIT License
 *
 * Copyright (c) 2022 Wasiq Bhamla
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */

package com.github.wasiqb.boyka.actions;

import static com.github.wasiqb.boyka.actions.CommonActions.performElementAction;

import com.github.wasiqb.boyka.builders.Locator;
import org.openqa.selenium.WebElement;

/**
 * Perform Keyboard actions.
 *
 * @author Wasiq Bhamla
 * @since 24-Feb-2022
 */
public final class KeyboardActions {
    /**
     * Clear text from text field.
     *
     * @param locator {@link Locator} of text field
     */
    public static void clearText (final Locator locator) {
        performElementAction (WebElement::clear, locator);
    }

    /**
     * Enter text in text field.
     *
     * @param locator {@link Locator} of text field
     * @param text text to enter
     */
    public static void enterText (final Locator locator, final String text) {
        performElementAction (e -> e.sendKeys (text), locator);
    }

    private KeyboardActions () {
        // Utility class
    }
}
