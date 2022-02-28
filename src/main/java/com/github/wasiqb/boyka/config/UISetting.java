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

package com.github.wasiqb.boyka.config;

import static com.github.wasiqb.boyka.enums.Messages.INVALID_PLATFORM_FOR_OPERATION;
import static java.text.MessageFormat.format;
import static java.util.Objects.requireNonNull;

import java.util.Map;

import com.github.wasiqb.boyka.config.ui.MobileSetting;
import com.github.wasiqb.boyka.config.ui.WebSetting;
import com.github.wasiqb.boyka.enums.ApplicationType;
import com.github.wasiqb.boyka.exception.FrameworkError;
import lombok.Data;

/**
 * @author Wasiq Bhamla
 * @since 17-Feb-2022
 */
@Data
public class UISetting {
    private Map<String, MobileSetting> android;
    private Map<String, MobileSetting> ios;
    private PlaybackSetting            playback;
    private Map<String, WebSetting>    web;

    /**
     * Gets the mobile setting.
     *
     * @param applicationType the {@link ApplicationType}
     * @param key the config key for Mobile
     *
     * @return the {@link MobileSetting}
     */
    public MobileSetting getMobileSetting (final ApplicationType applicationType, final String key) {
        if (applicationType == ApplicationType.IOS) {
            return requireNonNull (this.ios.get (key));
        } else if (applicationType == ApplicationType.ANDROID) {
            return requireNonNull (this.android.get (key));
        }
        throw new FrameworkError (format (INVALID_PLATFORM_FOR_OPERATION.getMessage (), applicationType));
    }

    /**
     * Gets the web setting.
     *
     * @param key the config key for Web
     *
     * @return the {@link WebSetting}
     */
    public WebSetting getWebSetting (final String key) {
        return this.web.get (key);
    }
}
